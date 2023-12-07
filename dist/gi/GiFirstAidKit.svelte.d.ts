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
export type GiFirstAidKitProps = typeof __propDef.props;
export type GiFirstAidKitEvents = typeof __propDef.events;
export type GiFirstAidKitSlots = typeof __propDef.slots;
export default class GiFirstAidKit extends SvelteComponentTyped<GiFirstAidKitProps, GiFirstAidKitEvents, GiFirstAidKitSlots> {
}
export {};
