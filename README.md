# SecurePass: Your Trustworthy Password Generator

## Description:
SecurePass is a robust Chrome extension designed to bolster your online security by effortlessly generating strong, unique passwords for all your accounts. With its intuitive interface and advanced encryption protocols, SecurePass ensures that your sensitive information remains protected from unauthorized access.

## Key Features:
1. **Password Generation:** Generate complex, randomized passwords with just a click of a button. SecurePass utilizes state-of-the-art algorithms to create unique combinations of characters, numbers, and symbols, significantly enhancing the security of your online accounts.

2. **Customization Options:** Tailor your passwords to meet specific requirements by adjusting parameters such as length, character types, and inclusion/exclusion of certain characters. This flexibility allows you to generate passwords that adhere to the varying criteria of different websites and applications.

3. **Local Storage:** Unlike many password managers that store your data on remote servers, SecurePass prioritizes your privacy by keeping all generated passwords locally on your device. This means that your sensitive information never leaves your control, mitigating the risk of potential data breaches or unauthorized access.

4. **Zero-Knowledge Encryption:** SecurePass employs cutting-edge encryption techniques to safeguard your passwords, ensuring that only you have access to your generated passwords. Your master password serves as the key to decrypting your data, and SecurePass never stores or transmits this password, maintaining a zero-knowledge policy to protect your privacy.

5. **Seamless Integration:** Seamlessly integrate SecurePass into your browsing experience with its lightweight and unobtrusive interface. Access the password generator directly from your Chrome browser toolbar, allowing for quick and convenient password creation whenever you need it.

6. **Accessibility and Cross-Platform Compatibility:** Enjoy the convenience of accessing SecurePass across multiple devices and platforms. Whether you're using Chrome on your desktop, laptop, or mobile device, SecurePass ensures consistent performance and accessibility wherever you go.

Protect your online accounts with confidence using SecurePass. Say goodbye to weak, easily guessable passwords and embrace the peace of mind that comes with knowing your digital identity is secure. Download SecurePass today and take control of your online security like never before.

# Uploading Chrome Extension Locally from GitHub Repository

## Prerequisites:
- Google Chrome browser installed on your computer.

## Steps:

1. **Clone the Repository:**
    - Open your terminal or command prompt.
    - Use the `git clone` command to clone the GitHub repository of the Chrome extension:
      ```
      git clone git@github.com:dekterev/password-generator.git
      ```

2. **Navigate to the Extension Directory:**
    - Use the `cd` command to navigate to the directory of the cloned repository:
      ```
      cd password-generator
      ```

3. **Enable Developer Mode in Chrome:**
    - Open Google Chrome.
    - Go to the browser menu (three dots) and select `More Tools` > `Extensions`.
    - Toggle the `Developer mode` switch at the top right corner to enable it.

4. **Load the Extension:**
    - Click on the `Load unpacked` button that appears after enabling Developer mode.
    - Navigate to the directory where the cloned repository is located.
    - Select the folder containing the Chrome extension (usually named `extension` or similar) and click `Select Folder`.

5. **Verify Installation:**
    - The Chrome extension should now be loaded and visible in the extensions list.
    - Ensure that the extension is enabled by toggling the switch next to it if necessary.

6. **Test the Extension:**
    - Open a new tab in Chrome and navigate to a website where the extension should be active.
    - Test the functionality of the extension to ensure it works as expected.

7. **Updating the Extension:**
    - If there are updates to the extension in the GitHub repository, pull the changes using `git pull`.
    - Reload the extension in Chrome by clicking the refresh icon next to the extension in the Extensions page.

Congratulations! You have successfully uploaded the Chrome extension locally from the GitHub repository. Enjoy using the extension!
