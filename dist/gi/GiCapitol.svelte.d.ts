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
export type GiCapitolProps = typeof __propDef.props;
export type GiCapitolEvents = typeof __propDef.events;
export type GiCapitolSlots = typeof __propDef.slots;
export default class GiCapitol extends SvelteComponentTyped<GiCapitolProps, GiCapitolEvents, GiCapitolSlots> {
}
export {};
