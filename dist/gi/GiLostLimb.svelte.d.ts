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
export type GiLostLimbProps = typeof __propDef.props;
export type GiLostLimbEvents = typeof __propDef.events;
export type GiLostLimbSlots = typeof __propDef.slots;
export default class GiLostLimb extends SvelteComponentTyped<GiLostLimbProps, GiLostLimbEvents, GiLostLimbSlots> {
}
export {};
