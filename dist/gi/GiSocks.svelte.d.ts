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
export type GiSocksProps = typeof __propDef.props;
export type GiSocksEvents = typeof __propDef.events;
export type GiSocksSlots = typeof __propDef.slots;
export default class GiSocks extends SvelteComponentTyped<GiSocksProps, GiSocksEvents, GiSocksSlots> {
}
export {};
