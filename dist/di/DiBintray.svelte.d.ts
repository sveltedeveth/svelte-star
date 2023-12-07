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
export type DiBintrayProps = typeof __propDef.props;
export type DiBintrayEvents = typeof __propDef.events;
export type DiBintraySlots = typeof __propDef.slots;
export default class DiBintray extends SvelteComponentTyped<DiBintrayProps, DiBintrayEvents, DiBintraySlots> {
}
export {};
