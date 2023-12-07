import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaRobotProps = typeof __propDef.props;
export type FaRobotEvents = typeof __propDef.events;
export type FaRobotSlots = typeof __propDef.slots;
export default class FaRobot extends SvelteComponentTyped<FaRobotProps, FaRobotEvents, FaRobotSlots> {
}
export {};
