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
export type GoGistProps = typeof __propDef.props;
export type GoGistEvents = typeof __propDef.events;
export type GoGistSlots = typeof __propDef.slots;
export default class GoGist extends SvelteComponentTyped<GoGistProps, GoGistEvents, GoGistSlots> {
}
export {};
