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
export type FaDeskproProps = typeof __propDef.props;
export type FaDeskproEvents = typeof __propDef.events;
export type FaDeskproSlots = typeof __propDef.slots;
export default class FaDeskpro extends SvelteComponentTyped<FaDeskproProps, FaDeskproEvents, FaDeskproSlots> {
}
export {};
