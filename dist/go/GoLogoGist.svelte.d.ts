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
export type GoLogoGistProps = typeof __propDef.props;
export type GoLogoGistEvents = typeof __propDef.events;
export type GoLogoGistSlots = typeof __propDef.slots;
export default class GoLogoGist extends SvelteComponentTyped<GoLogoGistProps, GoLogoGistEvents, GoLogoGistSlots> {
}
export {};
