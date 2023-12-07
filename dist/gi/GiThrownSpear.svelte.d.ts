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
export type GiThrownSpearProps = typeof __propDef.props;
export type GiThrownSpearEvents = typeof __propDef.events;
export type GiThrownSpearSlots = typeof __propDef.slots;
export default class GiThrownSpear extends SvelteComponentTyped<GiThrownSpearProps, GiThrownSpearEvents, GiThrownSpearSlots> {
}
export {};
