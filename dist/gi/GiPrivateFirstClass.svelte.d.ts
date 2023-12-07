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
export type GiPrivateFirstClassProps = typeof __propDef.props;
export type GiPrivateFirstClassEvents = typeof __propDef.events;
export type GiPrivateFirstClassSlots = typeof __propDef.slots;
export default class GiPrivateFirstClass extends SvelteComponentTyped<GiPrivateFirstClassProps, GiPrivateFirstClassEvents, GiPrivateFirstClassSlots> {
}
export {};
