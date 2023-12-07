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
export type DiAsteriskProps = typeof __propDef.props;
export type DiAsteriskEvents = typeof __propDef.events;
export type DiAsteriskSlots = typeof __propDef.slots;
export default class DiAsterisk extends SvelteComponentTyped<DiAsteriskProps, DiAsteriskEvents, DiAsteriskSlots> {
}
export {};
