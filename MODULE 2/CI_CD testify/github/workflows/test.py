import main
import unittest
class TestMain(unittest.TestCase):
     def test_addition(self):
        self.assertEqual(main.addition(2,4), 6 ,"Should be 6")
        self.assertEqual(main.addition(1,6), 7 ,"Should be 7")
        self.assertEqual(main.addition(10,60), 70 ,"Should be 70")
        self.assertEqual(main.addition(-4,1), -3 ,"Should be -1")
     def test_subtraction(self):
        self.assertEqual(main.subtraction(7, 1), 6, "Should be 3")
        self.assertEqual(main.subtraction(8, 5), 3, "Should be 3")
        self.assertEqual(main.subtraction(17, 5), 12, "Should be 3")
        self.assertEqual(main.subtraction(5, 1), 4, "Should be 3")
if __name__ == "__main__":
    unittest.main()