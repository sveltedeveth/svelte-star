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
export type GiBookshelfProps = typeof __propDef.props;
export type GiBookshelfEvents = typeof __propDef.events;
export type GiBookshelfSlots = typeof __propDef.slots;
export default class GiBookshelf extends SvelteComponentTyped<GiBookshelfProps, GiBookshelfEvents, GiBookshelfSlots> {
}
export {};
