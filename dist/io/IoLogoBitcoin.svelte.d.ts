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
export type IoLogoBitcoinProps = typeof __propDef.props;
export type IoLogoBitcoinEvents = typeof __propDef.events;
export type IoLogoBitcoinSlots = typeof __propDef.slots;
export default class IoLogoBitcoin extends SvelteComponentTyped<IoLogoBitcoinProps, IoLogoBitcoinEvents, IoLogoBitcoinSlots> {
}
export {};
