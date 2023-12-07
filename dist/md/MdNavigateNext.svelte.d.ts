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
export type MdNavigateNextProps = typeof __propDef.props;
export type MdNavigateNextEvents = typeof __propDef.events;
export type MdNavigateNextSlots = typeof __propDef.slots;
export default class MdNavigateNext extends SvelteComponentTyped<MdNavigateNextProps, MdNavigateNextEvents, MdNavigateNextSlots> {
}
export {};
