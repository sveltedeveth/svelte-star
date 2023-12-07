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
export type GiVirusProps = typeof __propDef.props;
export type GiVirusEvents = typeof __propDef.events;
export type GiVirusSlots = typeof __propDef.slots;
export default class GiVirus extends SvelteComponentTyped<GiVirusProps, GiVirusEvents, GiVirusSlots> {
}
export {};
