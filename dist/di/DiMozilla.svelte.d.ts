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
export type DiMozillaProps = typeof __propDef.props;
export type DiMozillaEvents = typeof __propDef.events;
export type DiMozillaSlots = typeof __propDef.slots;
export default class DiMozilla extends SvelteComponentTyped<DiMozillaProps, DiMozillaEvents, DiMozillaSlots> {
}
export {};
