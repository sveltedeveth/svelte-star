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
export type FaMagicProps = typeof __propDef.props;
export type FaMagicEvents = typeof __propDef.events;
export type FaMagicSlots = typeof __propDef.slots;
export default class FaMagic extends SvelteComponentTyped<FaMagicProps, FaMagicEvents, FaMagicSlots> {
}
export {};
