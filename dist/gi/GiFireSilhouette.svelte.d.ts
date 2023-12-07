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
export type GiFireSilhouetteProps = typeof __propDef.props;
export type GiFireSilhouetteEvents = typeof __propDef.events;
export type GiFireSilhouetteSlots = typeof __propDef.slots;
export default class GiFireSilhouette extends SvelteComponentTyped<GiFireSilhouetteProps, GiFireSilhouetteEvents, GiFireSilhouetteSlots> {
}
export {};
