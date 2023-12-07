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
export type GiGreekSphinxProps = typeof __propDef.props;
export type GiGreekSphinxEvents = typeof __propDef.events;
export type GiGreekSphinxSlots = typeof __propDef.slots;
export default class GiGreekSphinx extends SvelteComponentTyped<GiGreekSphinxProps, GiGreekSphinxEvents, GiGreekSphinxSlots> {
}
export {};
