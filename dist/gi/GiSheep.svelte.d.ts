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
export type GiSheepProps = typeof __propDef.props;
export type GiSheepEvents = typeof __propDef.events;
export type GiSheepSlots = typeof __propDef.slots;
export default class GiSheep extends SvelteComponentTyped<GiSheepProps, GiSheepEvents, GiSheepSlots> {
}
export {};
