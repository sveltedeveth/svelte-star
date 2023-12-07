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
export type GoClippyProps = typeof __propDef.props;
export type GoClippyEvents = typeof __propDef.events;
export type GoClippySlots = typeof __propDef.slots;
export default class GoClippy extends SvelteComponentTyped<GoClippyProps, GoClippyEvents, GoClippySlots> {
}
export {};
