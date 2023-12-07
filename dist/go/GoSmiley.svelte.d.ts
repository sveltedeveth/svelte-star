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
export type GoSmileyProps = typeof __propDef.props;
export type GoSmileyEvents = typeof __propDef.events;
export type GoSmileySlots = typeof __propDef.slots;
export default class GoSmiley extends SvelteComponentTyped<GoSmileyProps, GoSmileyEvents, GoSmileySlots> {
}
export {};
