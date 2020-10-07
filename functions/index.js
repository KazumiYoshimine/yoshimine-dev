const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const gmailDestination = functions.config().gmail.destination

// SMTPサーバーの設定
const mailTransport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})

// 実際の機能
// exports.sendMail = functions.region('asia-northeast1').https.onCall((data, context) => {

exports.sendMail1 = functions.https.onCall((data, context) => {
  // index.jsファイルの consol.log はFirebaseのproject の左メニュー Functions の「ログ」タブに出力
  console.log('gmailEmail: ' + gmailEmail)
  console.log('gmailDestination: ' + gmailDestination)
  console.log('data.form.subject: ' + data.form.subject)
  console.log('data.form.message: ' + data.form.message)
  console.log('data.form.email: ' + data.form.email)
  console.log('data.form.name: ' + data.form.name)
  const email = {
    from: gmailEmail,
    to: gmailDestination,
    subject: data.form.subject,
    text: '登録内容\n\nお名前: ' + data.form.name + '\n棟名・部屋番号: ' + data.form.organization + '\nEmail: ' + data.form.email + '\n件名: ' + data.form.subject + '\n\n問合せ内容:\n' + data.form.message + '\n\n返信が必要な内容については、メールにてご連絡をお願いいたします。',
  }

  // nodemailerのsendMail機能で、メールを送信する。
  // 変数は送信元などをまとめたもの
  mailTransport.sendMail(email, (err, info) => {
    if (err) {
      // 以下の console.log は消すな！
      return console.log('***** sendMail1 error in functions/index.js' + err)
    }
    // 以下の console.log は消すな！
    return console.log('sendMail1 OK in functions/index.js')
  })
})

exports.sendMail2 = functions.https.onCall((data, context) => {
  const email2 = {
    from: gmailEmail,
    to: data.form.email,
    subject: data.form.subject,
    text: '問合せの登録が完了しました。\n登録内容確認のため、ご登録のメールアドレスへ自動返信させていただきました。\n\nお名前: ' + data.form.name + '\n棟名・部屋番号: ' + data.form.organization + '\nEmail: ' + data.form.email + '\n件名: ' + data.form.subject + '\n\n問合せ内容:\n' + data.form.message + '\n\nご回答が必要な内容については、後日メールにてご連絡いたしますので\nしばらくお待ちください。',
  }

  mailTransport.sendMail(email2, (err, info) => {
    if (err) {
      // 以下の console.log は消すな！
      return console.log('***** sendMail2 error in functions/index.js' + err)
    }
    // 以下の console.log は消すな！
    return console.log('sendMail2 OK in functions/index.js')
  })
})
