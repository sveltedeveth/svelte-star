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
export type GoBookmarkProps = typeof __propDef.props;
export type GoBookmarkEvents = typeof __propDef.events;
export type GoBookmarkSlots = typeof __propDef.slots;
export default class GoBookmark extends SvelteComponentTyped<GoBookmarkProps, GoBookmarkEvents, GoBookmarkSlots> {
}
export {};
