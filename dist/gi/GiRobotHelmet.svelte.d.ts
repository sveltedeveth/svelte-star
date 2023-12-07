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
export type GiRobotHelmetProps = typeof __propDef.props;
export type GiRobotHelmetEvents = typeof __propDef.events;
export type GiRobotHelmetSlots = typeof __propDef.slots;
export default class GiRobotHelmet extends SvelteComponentTyped<GiRobotHelmetProps, GiRobotHelmetEvents, GiRobotHelmetSlots> {
}
export {};
