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
export type GiRobotLegProps = typeof __propDef.props;
export type GiRobotLegEvents = typeof __propDef.events;
export type GiRobotLegSlots = typeof __propDef.slots;
export default class GiRobotLeg extends SvelteComponentTyped<GiRobotLegProps, GiRobotLegEvents, GiRobotLegSlots> {
}
export {};
