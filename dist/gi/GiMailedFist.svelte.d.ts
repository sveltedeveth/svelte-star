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
export type GiMailedFistProps = typeof __propDef.props;
export type GiMailedFistEvents = typeof __propDef.events;
export type GiMailedFistSlots = typeof __propDef.slots;
export default class GiMailedFist extends SvelteComponentTyped<GiMailedFistProps, GiMailedFistEvents, GiMailedFistSlots> {
}
export {};
