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
export type GoThumbsdownProps = typeof __propDef.props;
export type GoThumbsdownEvents = typeof __propDef.events;
export type GoThumbsdownSlots = typeof __propDef.slots;
export default class GoThumbsdown extends SvelteComponentTyped<GoThumbsdownProps, GoThumbsdownEvents, GoThumbsdownSlots> {
}
export {};
