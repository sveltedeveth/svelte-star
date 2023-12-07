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
export type GiSwordSpinProps = typeof __propDef.props;
export type GiSwordSpinEvents = typeof __propDef.events;
export type GiSwordSpinSlots = typeof __propDef.slots;
export default class GiSwordSpin extends SvelteComponentTyped<GiSwordSpinProps, GiSwordSpinEvents, GiSwordSpinSlots> {
}
export {};
