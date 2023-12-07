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
export type GiMushroomCloudProps = typeof __propDef.props;
export type GiMushroomCloudEvents = typeof __propDef.events;
export type GiMushroomCloudSlots = typeof __propDef.slots;
export default class GiMushroomCloud extends SvelteComponentTyped<GiMushroomCloudProps, GiMushroomCloudEvents, GiMushroomCloudSlots> {
}
export {};
