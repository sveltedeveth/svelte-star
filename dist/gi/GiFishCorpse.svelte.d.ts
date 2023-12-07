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
export type GiFishCorpseProps = typeof __propDef.props;
export type GiFishCorpseEvents = typeof __propDef.events;
export type GiFishCorpseSlots = typeof __propDef.slots;
export default class GiFishCorpse extends SvelteComponentTyped<GiFishCorpseProps, GiFishCorpseEvents, GiFishCorpseSlots> {
}
export {};
