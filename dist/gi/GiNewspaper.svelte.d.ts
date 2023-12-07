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
export type GiNewspaperProps = typeof __propDef.props;
export type GiNewspaperEvents = typeof __propDef.events;
export type GiNewspaperSlots = typeof __propDef.slots;
export default class GiNewspaper extends SvelteComponentTyped<GiNewspaperProps, GiNewspaperEvents, GiNewspaperSlots> {
}
export {};
