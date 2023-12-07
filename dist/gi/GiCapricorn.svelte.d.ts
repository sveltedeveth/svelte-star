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
export type GiCapricornProps = typeof __propDef.props;
export type GiCapricornEvents = typeof __propDef.events;
export type GiCapricornSlots = typeof __propDef.slots;
export default class GiCapricorn extends SvelteComponentTyped<GiCapricornProps, GiCapricornEvents, GiCapricornSlots> {
}
export {};
