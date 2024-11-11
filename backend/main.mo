import Time "mo:base/Time";
import Int "mo:base/Int";

actor {
    // Target date: Friday Nov 15th, 2024 00:00:00 UTC
    let targetDate : Int = 1731628800000000000; // in nanoseconds

    public query func getTargetDate() : async Int {
        targetDate
    };

    public query func getCurrentTime() : async Int {
        Time.now()
    };
}
