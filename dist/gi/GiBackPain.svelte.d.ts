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
export type GiBackPainProps = typeof __propDef.props;
export type GiBackPainEvents = typeof __propDef.events;
export type GiBackPainSlots = typeof __propDef.slots;
export default class GiBackPain extends SvelteComponentTyped<GiBackPainProps, GiBackPainEvents, GiBackPainSlots> {
}
export {};
