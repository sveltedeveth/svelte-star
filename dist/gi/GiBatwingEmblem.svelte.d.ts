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
export type GiBatwingEmblemProps = typeof __propDef.props;
export type GiBatwingEmblemEvents = typeof __propDef.events;
export type GiBatwingEmblemSlots = typeof __propDef.slots;
export default class GiBatwingEmblem extends SvelteComponentTyped<GiBatwingEmblemProps, GiBatwingEmblemEvents, GiBatwingEmblemSlots> {
}
export {};
