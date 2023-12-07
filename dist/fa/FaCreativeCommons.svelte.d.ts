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
export type FaCreativeCommonsProps = typeof __propDef.props;
export type FaCreativeCommonsEvents = typeof __propDef.events;
export type FaCreativeCommonsSlots = typeof __propDef.slots;
export default class FaCreativeCommons extends SvelteComponentTyped<FaCreativeCommonsProps, FaCreativeCommonsEvents, FaCreativeCommonsSlots> {
}
export {};
