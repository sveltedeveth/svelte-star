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
export type GiVintageRobotProps = typeof __propDef.props;
export type GiVintageRobotEvents = typeof __propDef.events;
export type GiVintageRobotSlots = typeof __propDef.slots;
export default class GiVintageRobot extends SvelteComponentTyped<GiVintageRobotProps, GiVintageRobotEvents, GiVintageRobotSlots> {
}
export {};
