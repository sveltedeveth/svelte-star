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
export type GiWhiteBookProps = typeof __propDef.props;
export type GiWhiteBookEvents = typeof __propDef.events;
export type GiWhiteBookSlots = typeof __propDef.slots;
export default class GiWhiteBook extends SvelteComponentTyped<GiWhiteBookProps, GiWhiteBookEvents, GiWhiteBookSlots> {
}
export {};
