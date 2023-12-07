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
export type GiRobotGolemProps = typeof __propDef.props;
export type GiRobotGolemEvents = typeof __propDef.events;
export type GiRobotGolemSlots = typeof __propDef.slots;
export default class GiRobotGolem extends SvelteComponentTyped<GiRobotGolemProps, GiRobotGolemEvents, GiRobotGolemSlots> {
}
export {};
