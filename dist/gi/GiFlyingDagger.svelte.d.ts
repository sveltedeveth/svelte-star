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
export type GiFlyingDaggerProps = typeof __propDef.props;
export type GiFlyingDaggerEvents = typeof __propDef.events;
export type GiFlyingDaggerSlots = typeof __propDef.slots;
export default class GiFlyingDagger extends SvelteComponentTyped<GiFlyingDaggerProps, GiFlyingDaggerEvents, GiFlyingDaggerSlots> {
}
export {};
