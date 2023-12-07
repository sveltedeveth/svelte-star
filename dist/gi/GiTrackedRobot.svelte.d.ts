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
export type GiTrackedRobotProps = typeof __propDef.props;
export type GiTrackedRobotEvents = typeof __propDef.events;
export type GiTrackedRobotSlots = typeof __propDef.slots;
export default class GiTrackedRobot extends SvelteComponentTyped<GiTrackedRobotProps, GiTrackedRobotEvents, GiTrackedRobotSlots> {
}
export {};
