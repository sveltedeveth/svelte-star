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
export type GiSwanBreezeProps = typeof __propDef.props;
export type GiSwanBreezeEvents = typeof __propDef.events;
export type GiSwanBreezeSlots = typeof __propDef.slots;
export default class GiSwanBreeze extends SvelteComponentTyped<GiSwanBreezeProps, GiSwanBreezeEvents, GiSwanBreezeSlots> {
}
export {};
