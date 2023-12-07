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
export type GiStrafeProps = typeof __propDef.props;
export type GiStrafeEvents = typeof __propDef.events;
export type GiStrafeSlots = typeof __propDef.slots;
export default class GiStrafe extends SvelteComponentTyped<GiStrafeProps, GiStrafeEvents, GiStrafeSlots> {
}
export {};
