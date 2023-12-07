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
export type GiJetpackProps = typeof __propDef.props;
export type GiJetpackEvents = typeof __propDef.events;
export type GiJetpackSlots = typeof __propDef.slots;
export default class GiJetpack extends SvelteComponentTyped<GiJetpackProps, GiJetpackEvents, GiJetpackSlots> {
}
export {};
