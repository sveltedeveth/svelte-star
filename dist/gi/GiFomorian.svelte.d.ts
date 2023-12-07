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
export type GiFomorianProps = typeof __propDef.props;
export type GiFomorianEvents = typeof __propDef.events;
export type GiFomorianSlots = typeof __propDef.slots;
export default class GiFomorian extends SvelteComponentTyped<GiFomorianProps, GiFomorianEvents, GiFomorianSlots> {
}
export {};
