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
export type FaStumbleuponProps = typeof __propDef.props;
export type FaStumbleuponEvents = typeof __propDef.events;
export type FaStumbleuponSlots = typeof __propDef.slots;
export default class FaStumbleupon extends SvelteComponentTyped<FaStumbleuponProps, FaStumbleuponEvents, FaStumbleuponSlots> {
}
export {};
