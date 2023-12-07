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
export type GiLightningTearProps = typeof __propDef.props;
export type GiLightningTearEvents = typeof __propDef.events;
export type GiLightningTearSlots = typeof __propDef.slots;
export default class GiLightningTear extends SvelteComponentTyped<GiLightningTearProps, GiLightningTearEvents, GiLightningTearSlots> {
}
export {};
