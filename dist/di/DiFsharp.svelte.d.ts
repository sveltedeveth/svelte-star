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
export type DiFsharpProps = typeof __propDef.props;
export type DiFsharpEvents = typeof __propDef.events;
export type DiFsharpSlots = typeof __propDef.slots;
export default class DiFsharp extends SvelteComponentTyped<DiFsharpProps, DiFsharpEvents, DiFsharpSlots> {
}
export {};
