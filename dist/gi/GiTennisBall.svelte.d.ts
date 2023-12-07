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
export type GiTennisBallProps = typeof __propDef.props;
export type GiTennisBallEvents = typeof __propDef.events;
export type GiTennisBallSlots = typeof __propDef.slots;
export default class GiTennisBall extends SvelteComponentTyped<GiTennisBallProps, GiTennisBallEvents, GiTennisBallSlots> {
}
export {};
